document.getElementById("energyAuditForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const address = document.getElementById("home_address").value;
    const residenceType = document.getElementById("residence_type").value;

    const generateReport = document.getElementById("generate_report").checked;

    let report = `Energy Audit Report\n`;
    report += `Home Address: ${address}\n`;
    report += `Residence Type: ${residenceType}\n`;

    if (generateReport) {
        const auditInsights = "This is a sample audit report.\n";
        report += `Audit Insights:\n${auditInsights}\n`;
    }

    // Redirect to the report page with the report content as a URL parameter
    window.location.href = `report.html?reportContent=${encodeURIComponent(report)}`;
});
