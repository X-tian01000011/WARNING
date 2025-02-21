function dismissWarning() {
    Swal.fire({
        title: "MALWARE",
        text: "This action will retrieve your data",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, dismiss it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Action Executed",
                text: "Device data has been breached.",
                icon: "question"
            }).then(() => {
                document.querySelector(".warning-container").style.display = "none";
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "USE VPN!",
                text: "Click 'Yes, dismiss it!' to proceed.",
                icon: "warning"
            }).then(() => {
                dismissWarning();
            });
        }
    });
}
