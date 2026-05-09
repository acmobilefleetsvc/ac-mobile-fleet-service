import Image from "next/image";

const phone = '(937) 516-6739';
const phoneHref = 'tel:9375166739';
const email = 'Maintenance@ACMobileFleetSVC.Com';
const website = 'www.acmobilefleetsvc.com';

function Icon({ name, className = '', size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  };

  const icons = {
    phone: <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.17a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z" /></svg>,
    mail: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
    map: <svg {...common}><path d="M12 21s7-5.1 7-12a7 7 0 0 0-14 0c0 6.9 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>,
    globe: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" /></svg>,
    wrench: <svg {...common}><path d="M14.7 6.3a4.5 4.5 0 0 0-5.9 5.9L3 18l3 3 5.8-5.8a4.5 4.5 0 0 0 5.9-5.9l-3 3-3-3 3-3z" /></svg>,
    shield: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-5" /></svg>,
    truck: <svg {...common}><path d="M3 7h11v9H3z" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>,
    clock: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    check: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="m8 12 2.5 2.5L16 9" /></svg>,
    clipboard: <svg {...common}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4a3 3 0 0 1 6 0" /><path d="M9 12h6" /><path d="M9 16h4" /></svg>,
    zap: <svg {...common}><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" /></svg>,
    gauge: <svg {...common}><path d="M4 14a8 8 0 1 1 16 0" /><path d="M12 14l4-4" /><path d="M7 17h10" /></svg>,
    menu: <svg {...common}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>,
    arrow: <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
  };

  return icons[name] || icons.check;
}

const services = [
  { icon: 'gauge', title: 'Engine Diagnostics', text: 'No-starts, warning lights, performance issues, and mobile troubleshooting.' },
  { icon: 'zap', title: 'Electrical Repair', text: 'Lighting, starting, charging, wiring, batteries, and electrical diagnostics.' },
  { icon: 'shield', title: 'Brake & Air Systems', text: 'Brake issues, chamber replacement, air leaks, inspections, and adjustments.' },
  { icon: 'truck', title: 'Trailer Repair', text: 'Trailer brakes, lights, doors, landing gear, air systems, and general repairs.' },
  { icon: 'wrench', title: 'Suspension & Steering', text: 'On-site inspection and repair for safer handling and reduced downtime.' },
  { icon: 'clipboard', title: 'DOT Inspections', text: 'Compliance-focused inspections to help keep your fleet road-ready.' },
  { icon: 'clock', title: 'Roadside Assistance', text: 'Fast response when breakdowns happen day or night, rain or shine.' },
  { icon: 'check', title: 'PM Services', text: 'Routine preventive maintenance designed to keep equipment earning.' },
];

const roadsideItems = [
  'Engine no-starts',
  'Air leaks',
  'Brake issues',
  'Electrical problems',
  'Fuel delivery',
  'Tire changes',
  'Trailer repairs',
  'And more',
];

function CTAButton({ children, type = 'primary' }) {
  const href = type === 'phone' ? phoneHref : '#contact';
  const classes = type === 'outline'
    ? 'border border-orange-500 text-white hover:bg-orange-600'
    : 'bg-orange-600 text-black shadow-lg shadow-orange-950/40 hover:bg-orange-500';

  return <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-black uppercase tracking-wide transition hover:scale-[1.02] ${classes}`}>{children}</a>;
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-500">{eyebrow}</p>
      <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-zinc-300">{subtitle}</p> : null}
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-xl transition hover:border-orange-500/70 hover:bg-black">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-600 text-black">
        <Icon name={icon} size={30} />
      </div>
      <h3 className="mb-2 text-xl font-black uppercase text-white">{title}</h3>
      <p className="text-zinc-400">{text}</p>
    </div>
  );
}

function CheckItem({ children }) {
  return <li className="flex gap-3 text-zinc-200"><Icon name="check" className="mt-1 shrink-0 text-orange-500" size={22} /><span>{children}</span></li>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-orange-600/30 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
<a href="#home" className="flex items-center">
  <Image
  src="/images/logo.png"
  alt="AC Mobile Fleet Service"
  width={260}
  height={100}
  priority
  className="h-16 w-auto"
/>
</a>
          <nav className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide text-zinc-300 lg:flex">
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#fleet" className="hover:text-orange-500">Fleet Maintenance</a>
            <a href="#roadside" className="hover:text-orange-500">Roadside</a>
            <a href="#area" className="hover:text-orange-500">Service Area</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </nav>
          <a href={phoneHref} className="hidden rounded-xl bg-orange-600 px-5 py-3 font-black text-black lg:inline-flex">{phone}</a>
          <Icon name="menu" className="lg:hidden" />
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(234,88,12,.38),transparent_30%),linear-gradient(120deg,#000_0%,#080808_45%,#1f1f1f_100%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-[1.05fr_.95fr] md:py-28">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-orange-600/60 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-orange-500">Keep Your Fleet Moving</p>
              <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-8xl">Heavy Duty<br /><span className="text-orange-600">Truck & Trailer</span><br />Repair</h1>
              <p className="mt-7 max-w-2xl text-xl font-semibold text-zinc-200 md:text-2xl">Mobile medium and heavy duty truck repair, roadside assistance, fleet maintenance, DOT inspections, and trailer service across Southwest Ohio.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row"><CTAButton type="phone"><Icon name="phone" size={20} /> Call Now</CTAButton><CTAButton type="outline">Request Service <Icon name="arrow" size={18} /></CTAButton></div>
              <div className="mt-8 grid gap-3 text-sm font-bold uppercase text-zinc-300 sm:grid-cols-3"><span className="flex items-center gap-2"><Icon name="clock" className="text-orange-500" /> Fast Response</span><span className="flex items-center gap-2"><Icon name="map" className="text-orange-500" /> On-Site Repairs</span><span className="flex items-center gap-2"><Icon name="shield" className="text-orange-500" /> DOT Focused</span></div>
            </div>
            <div className="rounded-3xl border border-orange-600/50 bg-zinc-950/80 p-6 shadow-2xl shadow-orange-950/30">
              <div className="rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-8">
                <Icon name="truck" className="mb-5 text-orange-500" size={84} />
                <h2 className="text-3xl font-black uppercase text-white">We Come To You.</h2>
                <p className="mt-3 text-zinc-300">Professional mobile service for fleets, owner-operators, trucks, trailers, roadside breakdowns, and scheduled maintenance.</p>
                <ul className="mt-6 space-y-3"><CheckItem>All makes and models</CheckItem><CheckItem>Mobile diagnostics and repair</CheckItem><CheckItem>Preventive maintenance programs</CheckItem><CheckItem>Serving up to 100 miles from Dayton</CheckItem></ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20"><SectionTitle eyebrow="What We Do" title="Mobile Repair Services" subtitle="Built for medium and heavy duty trucks, trailers, fleets, and commercial equipment." /><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <ServiceCard key={service.title} icon={service.icon} title={service.title} text={service.text} />)}</div></section>

        <section id="roadside" className="bg-zinc-950 px-4 py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-500">Roadside Assistance</p><h2 className="text-5xl font-black uppercase leading-none md:text-7xl">Do Not Get Stuck.<br /><span className="text-orange-600">We Will Get You Unstuck.</span></h2><p className="mt-6 text-lg text-zinc-300">When your truck or trailer is down, every minute matters. We provide mobile heavy duty roadside assistance to help diagnose the issue and get you moving safely.</p><div className="mt-8"><CTAButton type="phone"><Icon name="phone" size={20} /> Call {phone}</CTAButton></div></div><div className="rounded-3xl border border-orange-600/40 bg-black p-8"><h3 className="mb-6 text-2xl font-black uppercase text-white">We Can Help With:</h3><div className="grid gap-4 sm:grid-cols-2">{roadsideItems.map((item) => <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-bold uppercase text-zinc-200"><span className="text-orange-500">✓</span> {item}</div>)}</div></div></div></section>

        <section id="fleet" className="px-4 py-20"><SectionTitle eyebrow="Fleet Maintenance" title="Prevent Breakdowns Before They Happen" subtitle="Custom preventive maintenance programs for powered units and trailers." /><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3"><div className="rounded-3xl border border-orange-600/50 bg-zinc-950 p-7 lg:col-span-2"><h3 className="text-3xl font-black uppercase text-orange-500">PM Services Include</h3><div className="mt-6 grid gap-8 md:grid-cols-2"><div><h4 className="mb-4 text-xl font-black uppercase">Powered Unit PM</h4><ul className="space-y-3"><CheckItem>Oil and filter change</CheckItem><CheckItem>Fuel filter replacement</CheckItem><CheckItem>Inspect brakes, suspension and steering</CheckItem><CheckItem>Inspect belts, hoses and wiring</CheckItem><CheckItem>Grease unit complete</CheckItem><CheckItem>Battery service and load test</CheckItem></ul></div><div><h4 className="mb-4 text-xl font-black uppercase">Trailer PM</h4><ul className="space-y-3"><CheckItem>Inspect brakes and air system</CheckItem><CheckItem>Inspect suspension and components</CheckItem><CheckItem>Grease unit front to rear</CheckItem><CheckItem>Inspect lights and wiring</CheckItem><CheckItem>Check landing gear and kingpin</CheckItem><CheckItem>Inspect doors, hinges and lockrods</CheckItem></ul></div></div></div><div className="rounded-3xl bg-orange-600 p-7 text-black"><h3 className="text-3xl font-black uppercase">Regular PM Keeps Your Fleet:</h3><ul className="mt-6 space-y-4 font-black uppercase"><li>✓ Reducing breakdowns</li><li>✓ Extending equipment life</li><li>✓ Improving safety</li><li>✓ Lowering repair costs</li><li>✓ Staying DOT compliant</li><li>✓ Moving and earning</li></ul></div></div></section>

        <section id="area" className="border-y border-zinc-800 bg-white px-4 py-16 text-black"><div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto_1fr]"><div className="flex items-center gap-5"><Icon name="map" size={70} /><h2 className="text-3xl font-black uppercase md:text-4xl">Proudly Serving<br />Up To 100 Mile Radius Of <span className="text-orange-600">Dayton, Ohio</span></h2></div><div className="hidden h-24 w-px bg-zinc-300 md:block" /><div><h3 className="text-3xl font-black uppercase">Local Service.<br />Professional Results.</h3><p className="mt-2 text-xl font-black uppercase text-orange-600">Keep your fleet moving.</p></div></div></section>

        <section id="contact" className="px-4 py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-500">Contact</p><h2 className="text-5xl font-black uppercase md:text-7xl">We Are Just A Call Away.</h2><p className="mt-5 text-lg text-zinc-300">Need emergency service or want to set up fleet maintenance? Reach out and we will help get your equipment back on the road.</p><div className="mt-8 space-y-4 text-xl font-bold"><a href={phoneHref} className="flex items-center gap-4 hover:text-orange-500"><Icon name="phone" className="text-orange-500" /> {phone}</a><a href={`mailto:${email}`} className="flex items-center gap-4 hover:text-orange-500"><Icon name="mail" className="text-orange-500" /> {email}</a><div className="flex items-center gap-4"><Icon name="globe" className="text-orange-500" /> {website}</div></div></div><form action={`mailto:${email}`} method="post" encType="text/plain" className="rounded-3xl border border-orange-600/50 bg-zinc-950 p-7"><h3 className="mb-6 text-2xl font-black uppercase">Request Service</h3><div className="grid gap-4"><input name="Company Name" className="rounded-xl border border-zinc-800 bg-black px-4 py-4 text-white outline-none focus:border-orange-500" placeholder="Company Name" /><input name="Contact Name" className="rounded-xl border border-zinc-800 bg-black px-4 py-4 text-white outline-none focus:border-orange-500" placeholder="Contact Name" /><input name="Phone Number" className="rounded-xl border border-zinc-800 bg-black px-4 py-4 text-white outline-none focus:border-orange-500" placeholder="Phone Number" /><input name="Truck or Trailer Type" className="rounded-xl border border-zinc-800 bg-black px-4 py-4 text-white outline-none focus:border-orange-500" placeholder="Truck / Trailer Type" /><textarea name="Service Needed" className="min-h-32 rounded-xl border border-zinc-800 bg-black px-4 py-4 text-white outline-none focus:border-orange-500" placeholder="Tell us what you need" /><button type="submit" className="rounded-xl bg-orange-600 px-6 py-4 font-black uppercase text-black hover:bg-orange-500">Submit Request</button></div></form></div></section>
      </main>

      <footer className="border-t border-orange-600/40 bg-zinc-950 px-4 py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left"><div><div className="text-2xl font-black uppercase text-orange-600">AC Mobile Fleet Service LLC</div><div className="font-bold uppercase tracking-[0.25em] text-zinc-300">Keep Your Fleet Moving</div></div><div className="text-sm text-zinc-400">© 2026 AC Mobile Fleet Service LLC. Mobile truck, trailer, and fleet maintenance service in Southwest Ohio.</div></div></footer>
    </div>
  );
}
