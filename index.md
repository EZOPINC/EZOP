---
layout: default
title: "Home"
description: "website design, SEO optimization, IT consulting, digital transformation for businesses of all sizes."
---

<section class="py-5 text-center bg-light" id="content-area">
    <div class="container">
      <h1 class="display-5 fw-bold">Transforming Businesses with Innovative IT Solutions</h1>
      <p class="lead">Expert IT consulting for infrastructure, databases, and digital transformation.</p>
      <p class="mb-4">Book an appointment at <strong>+1 (306) 914-7817</strong></p>
      <a href="{{'/contact' | relative_url }}" class="btn btn-primary btn-lg">Book a Free Consultation</a>
    </div>
  
  <div class="row g-4 mt-5 justify-content-center text-center " id="services">
    <h2> Services </h2>
    <p class="mb-5">We provide a complete range of IT and digital solutions to help you stay competitive, scalable, and future-ready.</p>
     <!-- Service 1 -->
    <div class="col-md-4">
      <div class="card service-card shadow-sm">
        <img src="assets/images/footprint.jpg" class="service-img" alt="Digital Footprint"/>
        <div class="card-body text-center">
          <i class="fas fa-globe service-icon"></i>
          <div class="service-title">Website Designing and hosting</div>
        </div>
        <div class="service-overlay">
          Design, develop and optimize websites to improve visibility and engagement. 
        </div>
      </div>
    </div>
    <!-- Service 2 -->
    <div class="col-md-4">
      <div class="card service-card shadow-sm">
        <img src="assets/images/infra.jpg" class="service-img" alt="Infrastructure Consulting"/>
        <div class="card-body text-center">
          <i class="fas fa-network-wired service-icon"></i>
          <div class="service-title">Infrastructure Consulting</div>
        </div>
        <div class="service-overlay">
          Design, implement, and optimize IT infrastructure for scalability, reliability, and security.
        </div>
      </div>
    </div>
    <!-- Service 3 -->
    <div class="col-md-4">
      <div class="card service-card shadow-sm">
        <img src="assets/images/database.jpg" class="service-img" alt="Database Solutions"/>
        <div class="card-body text-center">
          <i class="fas fa-database service-icon"></i>
          <div class="service-title">Database Solutions</div>
        </div>
        <div class="service-overlay">
          Streamline your databases for performance tuning, high availability, and compliance.
        </div>
      </div>
    </div>
    <!-- Service 4 -->
    <div class="col-md-4">
      <div class="card service-card shadow-sm">
        <img src="assets/images/cloud.jpg" class="service-img" alt="Cloud Migration"/>
        <div class="card-body text-center">
          <i class="fas fa-cloud-upload-alt service-icon"></i>
          <div class="service-title">Cloud Migration</div>
        </div>
        <div class="service-overlay">
          Seamless migration of on-premise systems to secure and scalable cloud infrastructure.
        </div>
      </div>
    </div>
    <!-- Service 5 -->
    <div class="col-md-4">
      <div class="card service-card shadow-sm">
        <img src="assets/images/SEO.jpg" class="service-img" alt="SEO Consulting"/>
        <div class="card-body text-center">
          <i class="fas fa-cogs service-icon"></i>
          <div class="service-title">SEO Consulting</div>
        </div>
        <div class="service-overlay">
          Accelerate your online presence with expert SEO strategies to boost search rankings and traffic.
        </div>
      </div>
    </div>
    <!-- Service 6 -->
    <div class="col-md-4">
      <div class="card service-card shadow-sm">
        <img src="assets/images/strategy.jpg" class="service-img" alt="IT Strategy & Advisory"/>
        <div class="card-body text-center">
          <i class="fas fa-lightbulb service-icon"></i>
          <div class="service-title">IT Strategy & Advisory</div>
        </div>
        <div class="service-overlay">
          Align technology initiatives with your business goals through expert IT consulting.
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-5 bg-light" id="why-choose">
  <div class="container text-center">
    <h2 class="fw-bold mb-4">Why Choose EZOPINC?</h2>
    <ul class="list-unstyled">
      <li>✔️ Affordable packages tailored to startups, SMEs, and enterprises</li>
      <li>✔️ Free starter website options for individuals and small businesses</li>
      <li>✔️ Dedicated support and maintenance to keep your business running smoothly</li>
      <li>✔️ Proven expertise in IT, databases, and cloud migration</li>
    </ul>
  </div>
</section>

<section class="testimonials">
  <div class="container">
    <h2 class="section-title">What Our Clients Say</h2>
    <div class="testimonial-grid">
      {% for t in site.data.testimonials.testimonials %}
      <div class="testimonial-card">
        <p class="testimonial-review">“{{ t.review }}”</p>
            <div class="testimonial-stars">
                {% for i in (1..t.stars) %}
                  ★
                {% endfor %}
            </div>
        <h3 class="testimonial-name"> {{ t.name }} </h3>
        <p class="testimonial-role">{{ t.role }}</p>
        <a href="{{ t.project }}" target="_blank" class="testimonial-link">View Project →</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="py-5" id="cta">
  <div class="container text-center">
    <h2 class="fw-bold">Let’s Build Your Digital Future Together</h2>
    <p class="mb-4">Partner with EZOPINC to unlock growth opportunities and establish a stronger online presence. Whether you need a simple portfolio site, an enterprise solution, or complete IT transformation — we’ve got you covered.</p>
    <a href="{{'/contact' | relative_url }}" class="btn btn-success btn-lg">Get Started Today</a>
  </div>
</section>
