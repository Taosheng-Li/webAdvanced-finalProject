import { useState } from "react";
import { z } from "zod";
import "./OrderPage.css";

const orderSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must be at most 100 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(5, "Phone number must be at least 5 characters")
      .max(20, "Phone number must be at most 20 characters"),
    item: z.string().min(1, "Please select a camera"),
    quantity: z.coerce
      .number()
      .int("Quantity must be a whole number")
      .min(1, "Minimum quantity is 1")
      .max(5, "Maximum quantity is 5"),
    startDate: z.string().min(1, "Please select a start date"),
    endDate: z.string().min(1, "Please select an end date"),
    message: z.string().optional(),
    newsletter: z.boolean(),
    terms: z.literal(true, {
      message: "You must accept the terms",
    }),
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: "End date cannot be before start date",
    path: ["endDate"],
  });

type OrderFormData = z.infer<typeof orderSchema>;

const initialFormData: OrderFormData = {
  fullName: "",
  email: "",
  phone: "",
  item: "",
  quantity: 1,
  startDate: "",
  endDate: "",
  message: "",
  newsletter: false,
  terms: false as true,
};

function OrderPage() {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<Record<string, unknown> | null>(
    null
  );
  const [submitError, setSubmitError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const target = e.target;
    const { name } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else if (name === "quantity") {
      setFormData((prev) => ({ ...prev, [name]: Number(target.value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: target.value }));
    }

    // clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    setResponse(null);

    // validate with Zod
    const result = orderSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const json = await res.json();
      setResponse(json);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setLoading(false);
    }
  }

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
          <form className="order-form" onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Customer Information</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "input-error" : ""}
                  />
                  {errors.fullName && (
                    <span className="error-msg">{errors.fullName}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && (
                    <span className="error-msg">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "input-error" : ""}
                  />
                  {errors.phone && (
                    <span className="error-msg">{errors.phone}</span>
                  )}
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Rental Details</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="item">Item to rent</label>
                  <select
                    id="item"
                    name="item"
                    value={formData.item}
                    onChange={handleChange}
                    className={errors.item ? "input-error" : ""}
                  >
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
                  {errors.item && (
                    <span className="error-msg">{errors.item}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={1}
                    max={5}
                    value={formData.quantity}
                    onChange={handleChange}
                    className={errors.quantity ? "input-error" : ""}
                  />
                  {errors.quantity && (
                    <span className="error-msg">{errors.quantity}</span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="startDate">Start date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className={errors.startDate ? "input-error" : ""}
                  />
                  {errors.startDate && (
                    <span className="error-msg">{errors.startDate}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={errors.endDate ? "input-error" : ""}
                  />
                  {errors.endDate && (
                    <span className="error-msg">{errors.endDate}</span>
                  )}
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Additional info</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message">Notes or special requests</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                  Keep me updated with Lumina news
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms as boolean}
                    onChange={handleChange}
                    className={errors.terms ? "input-error" : ""}
                  />
                  I accept the rental terms and privacy policy
                </label>
                {errors.terms && (
                  <span className="error-msg">{errors.terms}</span>
                )}
              </div>
            </fieldset>

            <button
              type="submit"
              className="btn-primary btn-inverted"
              disabled={loading}
            >
              {loading ? "Sending…" : "Send order request"}
            </button>
          </form>

          {submitError && (
            <div className="submit-error">
              <strong>Submission failed:</strong> {submitError}
            </div>
          )}

          {response && (
            <div className="response-section">
              <h2>Submission Successful</h2>
              <p className="response-subtitle">
                Your data was sent to httpbin and the server responded:
              </p>

              <div className="response-cards">
                <div className="response-card">
                  <h3>Data Sent</h3>
                  <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
                <div className="response-card">
                  <h3>Server Response</h3>
                  <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default OrderPage;
