import "./OrderPage.css";

function OrderPage() {
  return (
    <main>
      <section id="order-hero">
        <div className="container">
          <h1>Book Your Rental</h1>
          <p>
            Select any camera from our curated catalog, choose your rental
            dates, and tell us how we can help. We will confirm availability and
            follow up with delivery or pickup details.
          </p>
        </div>
      </section>

      <section id="order-form">
        <div className="container">
          <h2>Rental Order Form</h2>
          <form className="order-form" action="#" method="post">
            <fieldset>
              <legend>Customer Information</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Rental Details</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="item">Item to rent</label>
                  <select id="item" name="item" required>
                    <option value="">Select camera</option>
                    <option value="sony-a9-iii">Sony A9 III</option>
                    <option value="canon-eos-r5-mark-ii">
                      Canon EOS R5 Mark II
                    </option>
                    <option value="canon-eos-r6-mark-iii">
                      Canon EOS R6 Mark III
                    </option>
                    <option value="fujifilm-x-t5">Fujifilm X-T5</option>
                    <option value="hasselblad-x2d-ii">
                      Hasselblad X2D II 100C
                    </option>
                    <option value="leica-m11-d">Leica M11-D</option>
                    <option value="nikon-z6-ii">Nikon Z6 II</option>
                    <option value="leica-q3">Leica Q3</option>
                    <option value="sony-a7-iv">Sony A7 IV</option>
                    <option value="hasselblad-x1d-ii">
                      Hasselblad X1D II
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={1}
                    max={5}
                    defaultValue={1}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="startDate">Start date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End date</label>
                  <input type="date" id="endDate" name="endDate" required />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Additional info</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message">Notes or special requests</label>
                  <textarea id="message" name="message" rows={4}></textarea>
                </div>
              </div>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" name="newsletter" />
                  Keep me updated with Lumina news
                </label>
                <label>
                  <input type="checkbox" name="terms" required />
                  I accept the rental terms and privacy policy
                </label>
              </div>
            </fieldset>

            <button type="submit" className="btn-primary btn-inverted">
              Send order request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default OrderPage;
