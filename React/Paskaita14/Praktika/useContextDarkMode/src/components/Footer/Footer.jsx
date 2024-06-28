import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptate
        praesentium illum temporibus, iste illo? Ea id sint officia in
        voluptates harum eaque ipsum itaque, necessitatibus consequuntur cumque
        dicta possimus nulla eius incidunt non impedit fugit ipsa nostrum!
        Nesciunt porro vitae odit cumque soluta perferendis explicabo quo earum
        consequuntur dolore.
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio
        facilis, labore error nihil aut esse quasi nulla suscipit quia id
        tempore unde. Voluptas deserunt inventore beatae fugit sunt. Harum?
      </p>
      <div className={styles.contacts}>
        <h3>Contacts</h3>
        <ul>
          <li>Name: Jonas Jonaitis</li>
          <li>Email: j.jonaitis@email.com</li>
          <li>Phone: 313132165146</li>
          <li>Location: Lithuania</li>
        </ul>
      </div>
    </div>
  );
}
