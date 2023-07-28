export const LargeTemplate = ({ template = {} }) => {
  return (
    <div id="large">
      <div class="group">
        <img
          src={`images/large/${template?.image}`}
          alt="Large Image"
          width="430"
          height="360"
        />
        <div class="details">
          <p>
            <strong>Title</strong> {template?.title}
          </p>
          <p>
            <strong>Description</strong> This is a template suited for a
            professional business site. Original layered Photoshop .psd is
            included.
          </p>
          <p>
            <strong>Cost</strong> ${template?.cost}
          </p>
          <p>
            <strong>ID #</strong> {template?.image?.substr(0, 4)}
          </p>
          <p>
            <strong>Thumbnail File</strong> {template?.thumbnail}
          </p>
          <p>
            <strong>Large Image File</strong> {template?.image}
          </p>
        </div>
      </div>
    </div>
  );
};
