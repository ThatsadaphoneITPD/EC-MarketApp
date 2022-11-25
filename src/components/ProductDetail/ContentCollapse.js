import React from "react";
import { Collapse, Divider } from "antd";
import "./_ProductDetailStyle.scss";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export default function ContentCollapse() {
  const { Panel } = Collapse;
  return (
    <div className="Detail_Accordion_Menu">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIconPosition="right"
        style={{
          background: "rgba(255,255,255,8)",
          padding: "20px 0 20px 0 ",
        }}
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
      >
        <Divider />
        <Panel
          header="MATERIALS AND CARE"
          key="1"
          style={{ padding: "12px 0 12px 0 " }}
        >
          <div className="Accordion_Menu_content">
            <p>
              EZ-Mart products are made with carefully selected materials.
              Please handle with care for longer product life.
            </p>
            <ul className="Accordion_List">
              <li>
                Protect from direct light, heat and rain. Should it become wet,
                dry it immediately with a soft cloth
              </li>
              <li>
                Fill the bag with tissue paper to help maintain its shape and
                absorb humidity, and store in the provided flannel bag
              </li>
              <li>
                Do not carry heavy products that may affect the shape of the bag
              </li>
              <li>Clean with a soft, dry cloth</li>
            </ul>
          </div>
        </Panel>
        <Panel
          header="SHIPPING & RETURNS INFO"
          key="2"
          style={{ padding: "12px 0 12px 0 " }}
        >
          <div className="Accordion_Menu_content">
            <p>
              Holiday shipping, if you place your order by December 20 you will
              receive your item by December 24.
            </p>
            <br />
            <div className="Accordion_table">
              <table>
                <tr>
                  <td>Shipping Service & Fee</td>
                  <td>Delivery Estimate</td>
                </tr>
                <tr>
                  <td>
                    Premium Express <p>Free</p>{" "}
                  </td>
                  <td>
                    <p>Estimated delivery within 2 – 3 business days</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Standard (Fragrance only)</p> <p>Free</p>
                  </td>
                  <td>
                    <p>Estimated delivery within 2 - 5 business days.</p>
                    <br />
                    <p>Fragrance are delivered within the continental</p>
                    <p>Pl only</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Next Business Day:</p>
                    <p>Available</p>
                  </td>
                  <td>
                    <p>Currently Not Available</p>
                  </td>
                </tr>
              </table>
            </div>
            <p>A signature will be required upon delivery.</p>
            <br />
            <p>
              Pre-order, Made to Order and DIY items will ship on the estimated
              date noted on the product description page. These items will ship
              through Premium Express once they become available.
            </p>
            <br />
            <p>
              Returns may be made by mail or in store. The return window for
              online purchases is 30 days (10 days in the case of beauty items)
              from the date of delivery. You may return items by selecting
              "Return this Item" from your MY EZ-Mart account under order
              details, through your delivery confirmation email or by contacting
              a Client Advisor. Once the request has been approved, your prepaid
              shipping label will be emailed to you or will be available for
              download in your MY EZ-Mart account.
            </p>
            <br />
            <p>
              Additional information is available during the checkout process or
              on the FAQs Section.
            </p>
            <br />
            <p>CANADA</p>
            <div className="Accordion_table">
              <table>
                <tr>
                  <td>Shipping Service & Fee</td>
                  <td>Delivery Estimate</td>
                </tr>
                <tr>
                  <td>
                    <p>Standard</p> <p>Free</p>{" "}
                  </td>
                  <td>
                    <p>Click here to view shipping and delivery </p>
                    <p>information</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </Panel>
        <Panel
          header="GIFT WRAPPING"
          key="3"
          style={{ padding: "12px 0 12px 0 " }}
        >
          <div className="Accordion_Menu_content">
            <img
              style={{ width: "15rem", height: "12.5rem" }}
              src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660908166/Payment/featuredwrap_zmau20.jpg"
              alt="Gift"
            />
            <img
              style={{ width: "18rem", height: "12.5rem" }}
              src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660908645/Payment/White-Boxed_2_pm4jiy.jpg"
              alt="packaging"
            />
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <h1>New Eco Packaging</h1>
              <br />
              <p>
                Designed with the planet in mind, our packaging is completely
                recyclable and most EZ-Mart.com orders
              </p>
              <p>
                are completed by an online exclusive tote. In honor of the
                House’s 100th anniversary, the line takes
              </p>
              <p>
                on a celebratory feel with a red ribbon and the EZ-Mart 100
                logo.
              </p>
            </div>
          </div>
        </Panel>
        <Panel
          header="PAYMENT OPTIONS"
          key="4"
          style={{ padding: "12px 0 12px 0 " }}
        >
          <div className="Accordion_Menu_content">
            <p>
              EZ-Mart accepts the following forms of payment for online
              purchases:
            </p>
            <div className="Accordion_table_pay">
              <table>
                <tr>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660904746/Payment/visa_payment_method_card_icon_142729_1_kcveef.png"
                      alt="visa"
                    />
                    Visa
                  </td>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660906139/Payment/ids-software-vietnam-american-express-client-2_u4lkah.jpg"
                      alt="USA"
                    />{" "}
                    American Express
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660906143/Payment/the-mastercard_l05n7q.png"
                      alt="MC"
                    />{" "}
                    MasterCard
                  </td>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660906090/Payment/paypal-logo_hwo37w.png"
                      alt="PP"
                    />
                    Paypal
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660906139/Payment/download_2_aivzgz.png"
                      alt="DC"
                    />
                    Discover
                  </td>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660906133/Payment/amazonpay_vcmh7c.png"
                      alt="AP"
                    />
                    Amazon Pay
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660906129/Payment/JCB_logo.svg_rbak3o.png"
                      alt="JCB"
                    />
                    JCB
                  </td>
                  <td>
                    <img
                      className="imgPay"
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1660906125/Payment/affirm_ksxyfg.webp"
                      alt="AMF"
                    />
                    Pay Monthly With Affirm
                  </td>
                </tr>
              </table>
            </div>
            <p>New: Shop on EZ-Mart.com with monthly payments.</p>
            <br />
            <br />
            <p>
              PayPal may not be used to purchase Made to Order Décor or DIY
              items.
            </p>
            <br />
            <br />
            <p>
              The full transaction value will be charged to your credit card
              after we have verified your card details, received credit
              authorisation, confirmed availability and prepared your order for
              shipping. For Made To Order, DIY, personalised and selected Décor
              products, payment will be taken at the time the order is placed.
            </p>
            <p> For more information about payment, visit our FAQs Section.</p>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
