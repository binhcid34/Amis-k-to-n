<template>
  <div class="b-navbar">
    <div class="b-top-navbar">
      <a class="b-option-navbar"> </a>

      <a class="b-logo-navbar">
        <img
          src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
          alt=""
        />
      </a>
    </div>

    <div class="b-list-navbar">
      <ul>
        <li>
          <router-link to="/employee" class="navbar-item" title="Tổng quan">
            <div
              class="icon-dashboard icon-list-navbar"
              id="iconDashboard"
            ></div>
            <span class="navbar-item-title">Nhân viên</span>
          </router-link>
        </li>
        <li>
          <router-link to="/customer" class="navbar-item" title="Tiền mặt">
            <span class="icon-money icon-list-navbar"></span>
            <span class="navbar-item-title">Khách hàng</span>
          </router-link>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Tiền gửi">
            <span class="icon-bank icon-list-navbar"></span>
            <span class="navbar-item-title">Tiền gửi</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Mua hàng">
            <span class="icon-cart icon-list-navbar"></span>
            <span class="navbar-item-title">Mua hàng</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Bán hàng">
            <span class="icon-sale icon-list-navbar"></span>
            <span class="navbar-item-title">Bán hàng</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Quản lý hóa đơn">
            <span class="icon-document icon-list-navbar"></span>
            <span class="navbar-item-title">Quản lý hóa đơn</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Kho">
            <span class="icon-stock icon-list-navbar"></span>
            <span class="navbar-item-title">Kho</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Công cụ dụng cụ">
            <span class="icon-tool icon-list-navbar"></span>
            <span class="navbar-item-title">Công cụ dụng cụ</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Tài sản cố định">
            <span class="icon-asset icon-list-navbar"></span>
            <span class="navbar-item-title">Tài sản cố định</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Thuế">
            <span class="icon-tax icon-list-navbar"></span>
            <span class="navbar-item-title">Thuế</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Giá thành">
            <span class="icon-price icon-list-navbar"></span>
            <span class="navbar-item-title">Giá thành</span>
          </a>
        </li>
        <li>
          <a href="#dashboard" class="navbar-item" title="Tổng hợp">
            <span class="icon-general icon-list-navbar"></span>
            <span class="navbar-item-title">Tổng hợp</span>
          </a>
        </li>
        <li>
          <a href="#budget" class="navbar-item" title="Ngân sách">
            <span class="icon-budget icon-list-navbar"></span>
            <span class="navbar-item-title">Ngân sách</span>
          </a>
        </li>
        <li>
          <a href="#report" class="navbar-item" title="report">
            <span class="icon-report icon-list-navbar"></span>
            <span class="navbar-item-title">Báo cáo</span>
          </a>
        </li>
        <li>
          <a href="#finance" class="navbar-item" title="Phân tích tài chính">
            <span class="icon-finace icon-list-navbar"></span>
            <span class="navbar-item-title">Phân tích tài chính</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
@import url(../../css/layout/navbar.css);
</style>