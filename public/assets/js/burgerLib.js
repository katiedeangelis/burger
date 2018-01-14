// Make sure we wait to attach our handlers until the DOM is fully loaded.

window.addEventListener("load", function () {
    $(".create-form").on("submit", function (e) {
        // Make sure to preventDefault on a submit event.
        e.preventDefault();

        var newBurger = {
            burgerName: $("#burgerName").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers/create", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-devour").on("click", function (e) {
        e.preventDefault();

        $.ajax("/api/burgers/devour", {
            type: "PUT",
            data: {
                id: $(this).data("id")
            }
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});