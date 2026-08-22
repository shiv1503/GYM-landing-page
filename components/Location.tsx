import { siteConfig } from "@/lib/site";
import { hours, accessFeatures } from "@/lib/location";

export default function Location() {
  return (
    <section id="location">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div className="map-box" role="img" aria-label="Map showing gym location">
          <div className="map-pin" />
        </div>

        <div>
          <div className="eyebrow">Find Us</div>
          <h2 className="text-[36px] uppercase mb-6">Visit {siteConfig.name}</h2>

          <div className="mb-7">
            <h4 className="mono text-xs uppercase tracking-widest text-blue mb-3">Address</h4>
            <p className="m-0 text-muted">{siteConfig.address}</p>
          </div>

          <div className="mb-7">
            <h4 className="mono text-xs uppercase tracking-widest text-blue mb-3">Operating Hours</h4>
            <table className="hours-table">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day}>
                    <td>{h.day}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-7">
            <h4 className="mono text-xs uppercase tracking-widest text-blue mb-3">Parking &amp; Accessibility</h4>
            <div className="flex gap-5 flex-wrap mt-2.5">
              {accessFeatures.map((a) => (
                <div key={a.label} className="flex items-center gap-2 text-[13.5px] text-muted">
                  <span className="w-6.5 h-6.5 rounded-full bg-panel2 border border-border flex items-center justify-center text-xs text-lime flex-shrink-0">
                    {a.icon}
                  </span>
                  {a.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
