document.addEventListener("DOMContentLoaded", function () {

// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (el) {
return new bootstrap.Tooltip(el);
});

// Popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
popoverTriggerList.map(function (el) {
return new bootstrap.Popover(el);
    });
});
