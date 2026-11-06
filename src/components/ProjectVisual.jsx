import { ShieldAlert, ShoppingBag } from 'lucide-react';

/**
 * Original, stylised UI illustration for a project. These are deliberately
 * abstract mockups — not screenshots and not fabricated metrics.
 */
export default function ProjectVisual({ variant, year }) {
  if (variant === 'shopkart') {
    return (
      <div className="project-visual project-visual--shopkart">
        <span className="visual-tag">PROJECT · {year}</span>
        <div className="browser" aria-hidden="true">
          <div className="browser__bar">
            <span className="browser__dot" />
            <span className="browser__dot" />
            <span className="browser__dot" />
            <span className="browser__url">shopkart · storefront preview</span>
          </div>
          <div className="browser__body">
            <div className="mock-shop__top">
              <span className="mock-logo">ShopKart</span>
              <span className="mock-search">Search products…</span>
              <span className="mock-cart">
                <ShoppingBag size={8} />
                Cart
              </span>
            </div>
            <div className="mock-products">
              {[0, 1, 2].map((item) => (
                <div className="mock-product" key={item}>
                  <div className="mock-product__image" />
                  <div className="mock-product__body">
                    <div className="mock-line" />
                    <div className="mock-line mock-line--short" />
                    <span className="mock-tag">Add</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mock-tags" style={{ marginTop: 10 }}>
              <span className="mock-tag">Wishlist</span>
              <span className="mock-tag">Orders</span>
              <span className="mock-tag">Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--spam">
      <span className="visual-tag">PROJECT · {year}</span>
      <div className="browser" aria-hidden="true">
        <div className="browser__bar">
          <span className="browser__dot" />
          <span className="browser__dot" />
          <span className="browser__dot" />
          <span className="browser__url">spam detection · streamlit preview</span>
        </div>
        <div className="browser__body">
          <div className="mock-spam">
            <div className="mock-panel">
              <div className="mock-label">Incoming message</div>
              <div className="mock-message">
                Congratulations! You have won a free gift. Claim it now at the
                link below.
              </div>
              <div className="mock-verdict">
                <ShieldAlert size={9} />
                SPAM DETECTED
              </div>
              <div className="mock-meter">
                <span />
              </div>
            </div>
            <div className="mock-panel">
              <div className="mock-label">Model confidence</div>
              <div className="mock-bars">
                <span style={{ height: '38%' }} />
                <span style={{ height: '62%' }} />
                <span style={{ height: '48%' }} />
                <span style={{ height: '82%' }} />
                <span style={{ height: '66%' }} />
                <span style={{ height: '94%' }} />
              </div>
              <div className="mock-tags">
                <span className="mock-tag">Accuracy</span>
                <span className="mock-tag">Recall</span>
                <span className="mock-tag">F1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
