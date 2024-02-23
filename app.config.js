export default defineAppConfig({
  dayjs: {
    format: 'YYYYMMDD',
  },
  layout: {
    headerHeight: 55,
    footerHeight: 45,
  },
  button: {
    icon: {
      close: 'mdi:close-thick',
      search: 'ph:magnifying-glass-bold',
      delete: 'tdesign:delete-1',
      folder: 'mdi:folder-plus-outline',
      contents: 'mdi:playlist-plus',
      upArrow: 'system-uicons:chevron-up',
      downArrow: 'system-uicons:chevron-down',
      allUpArrow: 'system-uicons:chevron-up-double',
      allDownArrow: 'system-uicons:chevron-down-double',
    },
  },
  theme: {
    primaryColor: '#ababab',
  },

  d3: {
    duration: 500,
  },
});
