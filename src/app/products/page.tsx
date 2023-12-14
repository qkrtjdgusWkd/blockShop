"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

export default function page() {
  const contentStyle: React.CSSProperties = {
    height: "180px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    position: "relative",
    padding: "20px",
  };
  return (
    <div style={{ margin: "20px" }}>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <Image
              src="http://hyuu.co.kr/images/company/visual.jpg"
              layout="fill"
              alt="제품소개2222"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              src="http://hyuu.co.kr/images/company/visual.jpg"
              layout="fill"
              alt="제품소개"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              src="http://hyuu.co.kr/images/company/visual.jpg"
              layout="fill"
              alt="제품소개22"
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              src="http://hyuu.co.kr/images/company/visual.jpg"
              layout="fill"
              alt="제품소개"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
