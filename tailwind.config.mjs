export default {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      colors: {
        primary:   '#2C5D3F',  // 主色 - 深绿
        secondary: '#E8D5B7',  // 辅助色 - 暖米
        accent:    '#C17B4A',  // 强调色 - 琥珀铜
        bg:        '#FAF8F5',  // 背景色 - 暖白
        text:      '#2D2D2D',  // 正文字 - 深炭色
        border:    '#E0D5C5',  // 边框色
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '16px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.08)',
      },
      spacing: {
        '8':  '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
      },
    }
  }
};