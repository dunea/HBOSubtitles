document.addEventListener('DOMContentLoaded', function () {
    // 获取保存的选项值并填充表单字段
    chrome.storage.sync.get(['option1', 'option2'], function (data) {
        document.getElementById('option-1').value = data.option1 || '';
        document.getElementById('option-2').checked = data.option2 || false;
    });

    // 监听表单提交事件
    document.getElementById('options-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // 获取表单字段的值
        var option1Value = document.getElementById('option-1').value;
        var option2Value = document.getElementById('option-2').checked;

        // 保存选项到Chrome存储中
        chrome.storage.sync.set({
            'option1': option1Value,
            'option2': option2Value
        }, function () {
            // 选项保存成功后，显示保存成功消息
            // var status = document.getElementById('status');
            // status.textContent = 'Options saved.';
            // setTimeout(function () {
            //     status.textContent = '';
            // }, 1500);
        });
    });
});
