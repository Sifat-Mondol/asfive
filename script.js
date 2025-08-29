// ================== Global Variables ==================
let heartCount = 0
let coinCount = 100
let copyCount = 0

// ================== Helper Functions ==================
const getElement = (id) => document.getElementById(id)

// ================== Counter Update Function ==================
function updateCounters() {
  getElement("heartCount").textContent = heartCount
  getElement("coinCount").textContent = coinCount
  getElement("copyCount").textContent = `${copyCount} Copy`
}

// ================== Heart Increment Function ==================
function incrementHeart() {
  heartCount++
  updateCounters()
}

// ================== Call Function ==================
function makeCall(serviceName, number) {
  // Check if user has enough coins
  if (coinCount < 20) {
    alert("❌ Insufficient coins! You need at least 20 coins to make a call.")
    return
  }

 
  coinCount -= 20
  updateCounters()

  // Show call alert
  alert(`📞 Calling ${serviceName} (${number})...`)

  // Add to call history
  addToCallHistory(serviceName, number)
}

// ================== Copy Function ==================
function copyNumber(number) {
  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`📋 Number copied: ${number}`)
        copyCount++
        updateCounters()
      })
      .catch(() => {
        // Fallback to older method
        fallbackCopyTextToClipboard(number)
      })
  } else {
    // Fallback for older browsers
    fallbackCopyTextToClipboard(number)
  }
}

// ================== Fallback Copy Function ==================
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea")
  textArea.value = text
  textArea.style.top = "0"
  textArea.style.left = "0"
  textArea.style.position = "fixed"

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand("copy")
    if (successful) {
      alert(`📋 Number copied: ${text}`)
      copyCount++
      updateCounters()
    } else {
      alert("❌ Failed to copy. Please copy manually.")
    }
  } catch (err) {
    alert("❌ Failed to copy. Please copy manually.")
  }

  document.body.removeChild(textArea)
}

// ================== Add to Call History Function ==================
function addToCallHistory(serviceName, number) {
  const historyList = getElement("historyList")

  // Remove empty message if it exists
  const emptyMessage = historyList.querySelector(".empty")
  if (emptyMessage) {
    emptyMessage.remove()
  }

  // Create new history item
  const historyItem = document.createElement("div")
  historyItem.className = "history-item-scr"

  // Get current time
  const now = new Date()
  const timeString = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  })

  historyItem.innerHTML = `
        <div class="info">
            <div class="service-name">${serviceName}</div>
            <div class="number-time">📞 ${number}</div>
        </div>
        <div class="time">🕐 ${timeString}</div>
    `

  // Add to top of history list
  historyList.insertBefore(historyItem, historyList.firstChild)
}

// ================== Clear History Function ==================
function clearHistory() {
  const historyList = getElement("historyList")
  historyList.innerHTML = '<div class="empty">No calls made yet</div>'
  alert("🗑️ Call history cleared!")
}

// ================== Initialize on Page Load ==================
document.addEventListener("DOMContentLoaded", () => {

  updateCounters()

  // Clear existing history and show empty message
  const historyList = getElement("historyList")
  historyList.innerHTML = '<div class="empty">No calls made yet</div>'
})
