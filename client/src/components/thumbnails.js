export const Thumbnails = ({
  templates,
  activeThumbnail,
  setActiveThumbnail,
  setActiveTemplate,
  currentWindow,
  setCurrentWindow,
  pages,
}) => {
  const handleChangeActiveThumbnail = (template) => {
    setActiveThumbnail(template?.thumbnail);
    setActiveTemplate(template);
  };

  const handlePreviousTemplatesWindow = () => {
    if (currentWindow !== 1) setCurrentWindow(currentWindow - 1);
  };
  const handleNextTemplatesWindow = () => {
    if (currentWindow !== pages) setCurrentWindow(currentWindow + 1);
  };
  return (
    <div class="thumbnails">
      <div class="group">
        <>
          {templates.map((template, idx) => {
            return (
              <a
                href="#"
                onClick={() => handleChangeActiveThumbnail(template)}
                key={template?.id}
                class={template.thumbnail === activeThumbnail ? "active" : ""}
                title={template.title}
              >
                <img
                  src={`images/thumbnails/${template.thumbnail}`}
                  alt={template.title}
                  width="145"
                  height="121"
                />
                <span>{template.image}</span>
              </a>
            );
          })}
        </>
        <a
          href="#"
          onClick={handlePreviousTemplatesWindow}
          class={`previous ${currentWindow > 1 ? "" : "disabled"}`}
          title="Previous"
        >
          Previous
        </a>
        <a
          href="#"
          class={`next ${currentWindow < pages ? "" : "disabled"}`}
          title="Next"
          onClick={handleNextTemplatesWindow}
        >
          Next
        </a>
      </div>
    </div>
  );
};
