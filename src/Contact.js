function Contact() {
return (
<div>
<h1>Contact Us</h1>
<p>Email: ravi@example.com</p>
<p>Phone: +91 9876543210</p>
<form>
<input type="text" placeholder="Your Name" />
<br /><br />
<input type="email" placeholder="Your Email" />
<br /><br />
<textarea placeholder="Your Message"></textarea>
<br /><br />
<button type="submit">Send Message</button>
</form>
</div>
);
}
export default Contact;