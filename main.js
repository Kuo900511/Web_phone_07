document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;

  if (bodyId === "firstPage") {
    // 第一頁的邏輯
    console.log("正在執行第一頁的程式碼");
    
    const closeAdButton = document.getElementById("closeAd");
    const adPopup = document.getElementById("adPopup");
    let isAdClosed = false; // 標誌變數，記錄廣告是否已關閉

    // 點擊關閉按鈕，隱藏廣告並設置標誌為已關閉
    closeAdButton.addEventListener("click", () => {
      adPopup.style.display = "none"; // 隱藏廣告
      isAdClosed = true; // 設置標誌為已關閉
      console.log("廣告已關閉");
    });

    // 監聽滑動事件
    window.addEventListener("scroll", () => {
      // 如果廣告已被關閉，直接返回，不重新顯示
      if (isAdClosed) {
        return;
      }
  
    });
    
    const nextPageButton = document.getElementById("nextPageButton");
    nextPageButton.addEventListener("click", () => {
      window.location.href = "secondPage.html";
    });


  } else if (bodyId === "secondPage") {
    // 第二頁的邏輯
    console.log("正在執行第二頁的程式碼");

  }
});