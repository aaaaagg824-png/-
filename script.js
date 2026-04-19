document.getElementById('phoneForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const btn = document.getElementById('submitBtn');
    const box = document.getElementById('main-box');


    btn.innerText = "جاري الإرسال...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    setTimeout(() => {
        box.innerHTML =
            <div style="padding: 30px; animation: fadeIn 1s;">
                <h2 style="color: #28a745;">تم الإرسال بنجاح!</h2>
                <p>شكراً لك يا <b>${name}</b>.</p>
                <p>لقد تلقينا استفسارك في عالم الهواتف وسنرد عليك قريباً.</p>
                <button onclick="window.location.reload()" style="margin-top:20px; padding:10px 20px; background:#007bff; color:white; border:none; border-radius:5px; cursor:pointer;">إرسال رسالة أخرى</button>
            </div>
            ;
    }, 1500);
});