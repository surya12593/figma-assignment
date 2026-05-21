import React from 'react';
import { ChevronDown, ChevronLeft, Menu, Search, ShieldCheck, Tag, UserCircle, Wallet } from 'lucide-react';

const formRows = [
  [
    { label: 'Company Name', placeholder: 'abhigyan', active: true },
    { label: 'Email', placeholder: 'abhigyan.pandey@getreelax.com' },
  ],
  [
    { label: 'GST Number (Optional)', placeholder: 'GST Number' },
    { label: 'PAN Number (Optional)', placeholder: 'PAN Number' },
  ],
  [
    { label: 'Premise/House no.', placeholder: 'Premise/House no.' },
    { label: 'Street', placeholder: 'Street' },
  ],
  [
    { label: 'State', placeholder: 'Select state', select: true },
    { label: 'City', placeholder: 'Select city', select: true },
  ],
  [
    { label: 'Country', placeholder: 'India' },
    { label: 'Pin Code', placeholder: 'Pincode' },
  ],
];

export default function App() {
  return (
    <div className="checkout-shell">
      <header className="topbar">
        <label className="search-box">
          <input type="text" placeholder="Find influencers to collaborate with" />
          <Search size={15} strokeWidth={1.8} />
        </label>

        <div className="header-actions">
          <button className="upgrade-btn">
            <ShieldCheck size={12} fill="currentColor" />
            Upgrade
          </button>
          <button className="campaign-btn">+ Create Campaign</button>
          <button className="avatar-btn" aria-label="Profile">
            <UserCircle size={22} fill="#2f80ed" color="#2f80ed" />
          </button>
          <button className="menu-btn" aria-label="Open menu">
            <Menu size={21} />
          </button>
        </div>
      </header>

      <main className="checkout-body">
        <section className="checkout-grid">
          <div className="left-column">
            <a className="back-link" href="#">
              <ChevronLeft size={15} />
              <span>Back to plans</span>
            </a>

            <section className="details-card">
              <h1>Review your details</h1>
              <h2>Billing Information</h2>

              <form className="billing-form">
                {formRows.map((row) => (
                  <div className="form-row" key={row.map((field) => field.label).join('-')}>
                    {row.map((field) => (
                      <label className="field" key={field.label}>
                        <span>{field.label}</span>
                        <div className={field.active ? 'input-wrap active' : 'input-wrap'}>
                          <input type="text" placeholder={field.placeholder} />
                          {field.select && <ChevronDown size={14} color="#2878ef" />}
                        </div>
                      </label>
                    ))}
                  </div>
                ))}

                <div className="form-divider" />

                <div className="form-actions">
                  <button type="button" className="cancel-btn">
                    Cancel
                  </button>
                  <button type="button" className="save-btn">
                    Save Details
                  </button>
                </div>
              </form>
            </section>
          </div>

          <aside className="summary-column">
            <section className="summary-card">
              <h2>Order Summary</h2>

              <div className="plan-box">
                <div>
                  <div className="price">₹4,999<span>/month</span></div>
                  <p>Includes 5,000 credits/mo.</p>
                </div>
                <div className="selected-plan">
                  <span>SELECTED PLAN</span>
                  <strong>Startup</strong>
                </div>
              </div>

              <button className="growth-btn">⊕ Upgrade to Growth Plan</button>
            </section>

            <section className="payment-card">
              <div className="wallet-row">
                <Wallet size={15} color="#2878ef" />
                <div>
                  <strong>Wallet Balance</strong>
                  <span>₹500.00 available</span>
                </div>
                <button>Apply</button>
              </div>

              <div className="coupon-card">
                <div className="coupon-header">
                  <div>
                    <Tag size={15} />
                    <strong>Apply Coupon</strong>
                  </div>
                  <ChevronDown size={15} />
                </div>

                <div className="coupon-input">
                  <input type="text" placeholder="Enter coupon code" />
                  <button>Apply</button>
                </div>

                <label className="coupon-option selected">
                  <span>
                    <strong>WELCOME20</strong>
                    <em>20% off on your first month</em>
                  </span>
                  <input type="radio" name="coupon" defaultChecked />
                </label>

                <label className="coupon-option">
                  <span>
                    <strong>ANNUAL50</strong>
                    <em>50% off on annual plans</em>
                  </span>
                  <input type="radio" name="coupon" />
                </label>
              </div>

              <div className="totals">
                <div>
                  <span>Subtotal</span>
                  <strong>₹14,999.00</strong>
                </div>
                <div>
                  <span>Tax (18% GST)</span>
                  <strong>₹1,079.64</strong>
                </div>
              </div>

              <div className="due-row">
                <strong>Total due today</strong>
                <span>16,078.64</span>
              </div>

              <button className="payment-btn">Proceed to Payment</button>
            </section>
          </aside>
        </section>

        <button className="floating-help">T</button>
      </main>
    </div>
  );
}
