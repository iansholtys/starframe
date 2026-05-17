(function ($) {
  const MODAL_ID = "starframe-enter-modal";

  function unmount() {
    $("#" + MODAL_ID).remove();
  }

  function mount() {
    if ($("#" + MODAL_ID).length) {
      return;
    }

    const $modal = $("<div>", {
      id: MODAL_ID,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "starframe-modal-title",
    });

    const $panel = $("<div>", { class: "starframe-modal-panel" });
    const $title = $("<h2>", { id: "starframe-modal-title", text: "Starframe" });
    const $message = $("<p>", {
      text: "You have entered an instance with Starframe loaded.",
    });
    const $closeButton = $("<button>", { type: "button", text: "Dismiss" }).on("click", unmount);

    $panel.append($title, $message, $closeButton);
    $modal.append($panel).appendTo("body");
  }

  $(window).on("genrpg:instance-entered", mount);
  $(window).on("genrpg:instance-exited", unmount);
})(jQuery);
