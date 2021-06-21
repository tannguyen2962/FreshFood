var cuaHangBtn = $('#testBtn');
      var cuaHangSubMenuContent = $('#cua-hang-sub-menu-wrapper');
      var cuaHangPopoverConfig = {
        html : true,
        placement: 'bottom',
        content: cuaHangSubMenuContent.html(),
      };
      new bootstrap.Popover(cuaHangBtn, cuaHangPopoverConfig);