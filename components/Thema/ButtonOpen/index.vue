<template>
  <button
    ref="buttonRef"
    class="buka-undangan-btn relative w-[30vmin] cursor-pointer overflow-hidden rounded-xl border-none bg-[#4a5c3b] px-[2vw] py-[1.3vh] transition-transform duration-300"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
    @mouseover="createParticles"
  >
    <div
      ref="sparklesRef"
      class="sparkles pointer-events-none absolute inset-0"
    />
    <div
      class="border-effect absolute inset-0 scale-110 rounded-xl border-2 border-white/30 opacity-0 transition-all duration-300"
    />

    <div
      class="button-content relative z-10 flex flex-col items-center gap-[2vh] font-semibold text-white"
    >
      <span
        class="icon-envelope relative inline-block transition-transform duration-300"
      >
        <img
          src="/thema/primeYellow/envelope-white.png"
          class="relative z-10 -mb-2 w-[3vmin]"
          alt="envelope"
        />
      </span>
      <span>Buka Undangan</span>
    </div>
  </button>
</template>
<script setup>
  const buttonRef = ref(null)
  const sparklesRef = ref(null)

  // Magnetic effect
  const handleMouseMove = (e) => {
    const button = buttonRef.value
    if (!button) return

    const bounds = button.getBoundingClientRect()
    const mouseX = e.clientX - bounds.left
    const mouseY = e.clientY - bounds.top
    const centerX = bounds.width / 2
    const centerY = bounds.height / 2
    const maxMove = 10

    const moveX = ((mouseX - centerX) / centerX) * maxMove
    const moveY = ((mouseY - centerY) / centerY) * maxMove

    button.style.transform = `translate(${moveX}px, ${moveY}px)`
  }

  const handleMouseLeave = () => {
    if (buttonRef.value) {
      buttonRef.value.style.transform = 'translate(0, 0)'
    }
  }

  // Ripple effect
  const handleClick = (e) => {
    const button = buttonRef.value
    if (!button) return

    // Create ripple
    const ripple = document.createElement('div')
    ripple.className =
      'ripple absolute rounded-full bg-white/30 scale-0 pointer-events-none'
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    button.appendChild(ripple)

    // Animate ripple
    ripple.animate(
      [
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(4)', opacity: 0 },
      ],
      {
        duration: 800,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    ).onfinish = () => ripple.remove()

    // Create sparkles
    createSparkles(e.clientX - rect.left, e.clientY - rect.top)
  }

  // Sparkles effect
  const createSparkles = (x, y) => {
    const sparklesContainer = sparklesRef.value
    if (!sparklesContainer) return

    for (let i = 0; i < 10; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle absolute bg-white rounded-full'
      sparkle.style.left = `${x}px`
      sparkle.style.top = `${y}px`

      const angle = Math.random() * Math.PI * 2
      const size = 2 + Math.random() * 3
      sparkle.style.width = sparkle.style.height = `${size}px`

      sparklesContainer.appendChild(sparkle)

      sparkle.animate(
        [
          {
            transform: 'translate(0, 0) scale(1)',
            opacity: 1,
          },
          {
            transform: `translate(${Math.cos(angle) * 100}px, ${Math.sin(angle) * 100}px) scale(0)`,
            opacity: 0,
          },
        ],
        {
          duration: 1000,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      ).onfinish = () => sparkle.remove()
    }
  }

  // Hover particles
  const createParticles = () => {
    const button = buttonRef.value
    if (!button) return

    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div')
      particle.className =
        'particle absolute bg-white rounded-full pointer-events-none opacity-0'
      button.appendChild(particle)

      const size = Math.random() * 4 + 2
      particle.style.width = particle.style.height = `${size}px`

      const startX = Math.random() * 100
      const startY = Math.random() * 100

      particle.animate(
        [
          {
            left: `${startX}%`,
            top: `${startY}%`,
            opacity: 0,
            transform: 'scale(0)',
          },
          {
            opacity: 0.5,
            transform: 'scale(1)',
          },
          {
            left: `${startX + (Math.random() - 0.5) * 20}%`,
            top: `${startY - 20}%`,
            opacity: 0,
            transform: 'scale(0)',
          },
        ],
        {
          duration: 1000 + Math.random() * 1000,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      ).onfinish = () => particle.remove()
    }
  }
</script>
<style scoped>
  .buka-undangan-btn {
    background-color: #4a5c3b;
    color: white;
    font-family: 'Lora', serif;
    font-size: 2vmin;
    transition: all 0.3s ease;
    border: 2px solid #4a5c3b;
  }
  .buka-undangan-btn:hover .border-effect {
    opacity: 1;
    transform: scale(1);
  }
</style>
