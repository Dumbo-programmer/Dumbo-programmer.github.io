document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            const targetTab = tab.getAttribute("data-tab");

            // Deactivate all tabs and hide all content sections
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.add("hidden"));

            // Activate the clicked tab and show the corresponding content
            tab.classList.add("active");
            document.getElementById(targetTab).classList.remove("hidden");
        });
    });
});
