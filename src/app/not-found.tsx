export default function NotFound() {
  return (
    <section className="maintenance-page" aria-labelledby="maintenance-title">
      <div className="maintenance-content">
        <h1 id="maintenance-title" className="maintenance-title">
          Maintenance Break
        </h1>
        <p className="maintenance-subtitle">We will be back soon</p>
        <div className="maintenance-rule" aria-hidden="true" />
        <p className="maintenance-copy">
          MisfitzStatz is temporarily unavailable due to scheduled maintenance.
          <br />
          Thank you for your patience.
        </p>
      </div>
    </section>
  );
}
