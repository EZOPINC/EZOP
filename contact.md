---
layout: default
title: "Contact Us"
description: "Get in touch with EZOPINC for IT consulting, website design, digital transformation, and business support services. We’re here to help you grow."
---

<section class="py-5 bg-light" id="contact-header">
  <div class="container text-center">
    <h1 class="fw-bold">Contact EZOPINC</h1>
    <p class="lead text-center">
      Have a question, project idea, or need expert guidance on IT solutions?  
      Our team is here to help you with digital transformation, infrastructure consulting, database management, and modern web design.  
      Get in touch today to discover how EZOPINC can support your business growth. 
      We’d love to hear from you!
    </p>
  </div>
</section>

<section class="py-5" id="contact-details">
  <div class="container">
    <h2>How to Reach Us</h2>
    <p>At <strong>EZOPINC</strong>, we believe in making technology simple, accessible, and effective. If you have questions about our <em>website design packages</em>, <em>business IT consulting</em>, or <em>digital transformation services</em>, reach out to us using any of the methods below.</p>
    <ul>
      <li><strong>Phone:</strong> +1 (306) 914-7817</li>
      <li><strong>Email:</strong> <a href="mailto:support@ezopinc.com">support@ezopinc.ca</a></li>
      <li><strong>Location:</strong> Saskatoon, Canada (serving businesses worldwide)</li>
      <li><strong>Business Hours:</strong> 24*7 </li>
    </ul>
    <p>We aim to respond to all inquiries within 24 hours. For urgent matters, please call us directly.</p>
  </div>
</section>

<section class="py-5 bg-light" id="contact-form">
    <div class="container">
        <h2>Send Us a Message</h2>
        <p>Use the form below to book a free consultation or send us your questions. One of our experts will get back to you shortly.</p>
        <!-- Google Form Embed -->
        <div class="form-container" style="margin-top: 1rem;">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfVt84MfN7VAcCQ14hjn17wnMyEcqd-mtC9xqcOkXIuOiMQyw/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
</section>

<section class="py-5 bg-light" id="faq">
  <div class="container">
    <h2 class="text-center mb-4">Frequently Asked Questions</h2>
    <p class="text-center mb-5">
      Here are some quick answers to common questions about our services:
    </p>
    <div class="accordion" id="faqAccordion">
      {% for item in site.data.faq %}
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading{{ forloop.index }}">
          <button class="accordion-button {% unless forloop.first %}collapsed{% endunless %}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ forloop.index }}" aria-expanded="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="collapse{{ forloop.index }}">
            {{ item.question }}
          </button>
        </h2>
        <div id="collapse{{ forloop.index }}" class="accordion-collapse collapse {% if forloop.first %}show{% endif %}" aria-labelledby="heading{{ forloop.index }}" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            {{ item.answer }}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>




