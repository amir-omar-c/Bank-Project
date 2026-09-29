export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <section id="modal">
        <div id="modal-content">
          {/* <h1>The Form Has Been Submitted Successfully</h1> */}
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
}
