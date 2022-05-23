import React from "react";

const Banner = () => {
  return (
    <div className="mt-8">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets-powerstores-com/data/org/20316/media/img/source/edit/2423929_edit.jpg" alt=""
            class="w-full h-200"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://thumbs.dreamstime.com/b/hand-blue-working-gloves-various-diy-handyman-tools-behind-wooden-planks-copy-space-isolated-white-background-banner-117751412.jpg" alt=""
            class="w-full h-200 "
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://image.shutterstock.com/z/stock-vector-construction-concept-tools-shop-service-banner-set-all-of-tools-supplies-for-house-repair-builder-1227526900.jpg" alt=""
            class="w-full h-200"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
