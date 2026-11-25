import { email, earlier, github, linkedin, phone, phoneHref, projects, roles, skills, study } from "./content";

export function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <div className="field" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
        <span className="orb orb-d" />
        <span className="orb orb-e" />
      </div>
      <header className="nav">
        <a className="nav-mark" href="#top">
          Ahmad Musa
        </a>
        <nav aria-label="On this page">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <p className="kicker">Software developer · Zaria, Nigeria</p>
            <h1>Ahmad Musa</h1>
            <p className="lede">
              I build web software that a person can finish a real job with. I study computer science at Ahmadu Bello
              University, and I am looking for a software engineering internship.
            </p>
            <p className="hero-links">
              <a href={`mailto:${email}`}>Email</a>
              <a href={linkedin}>LinkedIn</a>
              <a href={github}>GitHub</a>
            </p>
          </div>
          <dl className="facts">
            <div>
              <dt>Based in</dt>
              <dd>Zaria, Nigeria</dd>
            </div>
            <div>
              <dt>Studying</dt>
              <dd>B.Sc. Computer Science, ABU</dd>
            </div>
            <div>
              <dt>Shipped</dt>
              <dd>Web apps, APIs, desktop tools</dd>
            </div>
            <div>
              <dt>Open to</dt>
              <dd>Software engineering internship</dd>
            </div>
          </dl>
        </section>

        <section id="work" className="band">
          <div className="wrap">
            <header className="section-head">
              <h2>Selected work</h2>
              <p>Two products with public code. Both were built for someone who is not an engineer.</p>
            </header>
            <div className="cases">
              {projects.map((project, index) => (
                <article className="case" key={project.name}>
                  <p className="case-index">
                    <span>0{index + 1}</span>
                    <span>{project.year}</span>
                  </p>
                  <div>
                    <h3>{project.name}</h3>
                    <p className="case-title">{project.title}</p>
                    <p className="prose">{project.summary}</p>
                    <p className="stack">{project.stack.join(" · ")}</p>
                    <p className="case-links">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="earlier">
              <h3>Earlier</h3>
              <ul>
                {earlier.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}.</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="wrap section">
          <header className="section-head">
            <h2>Experience</h2>
          </header>
          <div className="roles">
            {roles.map((role) => (
              <article className="role" key={role.title}>
                <p className="role-dates">{role.dates}</p>
                <div>
                  <h3>{role.title}</h3>
                  <p className="role-org">
                    {role.org}
                    {role.place ? ` · ${role.place}` : ""}
                  </p>
                  <ul>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="study" className="band">
          <div className="wrap section">
            <header className="section-head">
              <h2>Education</h2>
            </header>
            <div className="study">
              {study.map((item) => (
                <article key={item.credential}>
                  <p className="role-dates">{item.dates}</p>
                  <div>
                    <h3>{item.credential}</h3>
                    <p className="role-org">
                      {item.school} · {item.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <dl className="skills">
              {skills.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <header className="section-head">
            <h2>Contact</h2>
            <p>The fastest way to reach me is email. I read every note.</p>
          </header>
          <p className="email">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <ul className="contact-list">
            <li>
              <a href={phoneHref}>{phone}</a>
            </li>
            <li>
              <a href={linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={github}>github.com/strawhatdev01</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>Ahmad Musa · Zaria</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
