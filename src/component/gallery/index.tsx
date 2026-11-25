import { useState } from "react"
import { GALLERY_IMAGES } from "../../images"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { Modal } from "../modal"

const INITIAL_IMAGE_COUNT = 9

/**
 * 사진을 격자 형태로 보여주고 전체 화면 미리보기를 제공합니다.
 */
export const Gallery = () => {
  const modalState = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visibleImages = showAll
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.slice(0, INITIAL_IMAGE_COUNT)

  const moveImage = (direction: -1 | 1) => {
    if (selectedImage === null) return
    setSelectedImage(
      (selectedImage + direction + GALLERY_IMAGES.length) %
        GALLERY_IMAGES.length,
    )
  }

  return (
    <>
      <LazyDiv className="card gallery">
        <h2 className="english">Gallery</h2>
        <div className="section-subtitle">우리의 순간들</div>
        <div className="photo-grid">
          {visibleImages.map((image, idx) => (
            <button
              key={image}
              className="photo-thumb"
              onClick={() => {
                setSelectedImage(idx)
                modalState[1](true)
              }}
              aria-label={`${idx + 1}번째 사진 크게 보기`}
            >
              <img src={image} alt={`웨딩 사진 ${idx + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
        {GALLERY_IMAGES.length > INITIAL_IMAGE_COUNT && (
          <Button
            className="gallery-toggle"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            {showAll ? "접기 ↑" : "더보기 ↓"}
          </Button>
        )}
      </LazyDiv>

      <Modal
        modalState={modalState}
        className="photo-lightbox"
        closeOnClickBackground={true}
      >
        {selectedImage !== null && (
          <>
            <div className="header">
              <div className="title">
                {selectedImage + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>
            <div className="content">
              <div className="lightbox-image">
                <button
                  className="photo-nav"
                  onClick={() => moveImage(-1)}
                  aria-label="이전 사진"
                >
                  ‹
                </button>
                <img
                  src={GALLERY_IMAGES[selectedImage]}
                  alt={`웨딩 사진 ${selectedImage + 1}`}
                />
                <button
                  className="photo-nav"
                  onClick={() => moveImage(1)}
                  aria-label="다음 사진"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="footer">
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={() => modalState[1](false)}
              >
                닫기
              </Button>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
