import "bootstrap/dist/css/bootstrap.min.css";

import "../Assets/Styles.scss";
export const DefaultLayout = () => {
  return `
    <header class="mb-3">
        <div class="container">
             <div class="headerflex row">
                <div class="list-menu col-6">
                    <ul class="menu-header">
                        <li><a href="/" data-route>Trang chủ</a></li>
                        <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
                        <li><a href="/san-pham" data-route>Sản phẩm</a></li>
                    </ul>
                </div>
                <div class="col-6">
                    <ul class="action">
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                        <li><i class="fa-solid fa-user"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    {body}
                </div>
            </div>
        </div>
    </main>
    <footer class="mt-3">
        <div class="container">
            <h1>Footer</h1>
        </div>
    </footer>
    `;
};
