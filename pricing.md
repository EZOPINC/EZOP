---
layout: default
title: Pricing
permalink: /pricing/
---

<section class="pricing-section">
  <div class="container">
    <h1 class="pricing-title">Our Pricing Plans</h1>
    <p class="pricing-subtitle">Choose the right package for your business — start free and scale as you grow.</p>
    <div class="pricing-grid">
      {% for plan in site.data.pricing.plans %}
      <div class="pricing-card {% if plan.popular %}popular{% endif %}">
        {% if plan.popular %}
          <div class="badge">Most Popular</div>
        {% endif %}
        <h2>{{ plan.name }}</h2>
        <p class="price">{{ plan.price }}{% if plan.frequency %} <span>/ {{ plan.frequency }}</span>{% endif %}</p>
        <ul>
          {% for feature in plan.features %}
          <li>{{ feature }}</li>
          {% endfor %}
        </ul>
        <a href="{{ plan.url }}" class="btn {% if plan.popular %}primary{% endif %}">{{ plan.button }}</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
