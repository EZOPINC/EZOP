---
layout: default
title: Pricing
permalink: /pricing/
---

<section class="pricing-section">
  <div class="container">
    <h1 class="pricing-title">Website Building and Designing packages</h1>
    <p class="pricing-subtitle">Choose the right package for you — start free and scale as you grow. Any questions, contact us and we will always be there to answer.</p>
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
        <a href="{{ plan.url }}" class="choice-btn {% if plan.popular %}primary{% endif %}">{{ plan.button }}</a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
