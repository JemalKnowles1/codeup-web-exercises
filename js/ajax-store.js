$(document).ready(function() {
    var inventoryUrl = "data/inventory.json";
    var $inventoryTableBody = $("#inventoryTableBody");

    // Function to fetch inventory data and append it to the table
    function fetchInventoryData() {
        $.ajax({
            url: inventoryUrl,
            type: "GET",
            dataType: "json"
        })
            .done(function(data) {
                $inventoryTableBody.empty(); // Clear existing data

                data.forEach(function(item) {
                    var row = "<tr>" +
                        "<td>" + item.title + "</td>" +
                        "<td>" + item.price + "</td>" +
                        "<td>" + item.stock + "</td>" +
                        "</tr>";

                    $inventoryTableBody.append(row);
                });
            })
            .fail(function() {
                console.log("Failed to fetch inventory data.");
            });
    }

    // Initial load of inventory data
    fetchInventoryData();

    // Refresh button click event handler
    $("#refreshBtn").click(function() {
        fetchInventoryData();
    });
});
