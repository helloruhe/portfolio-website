import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/assets/Button";
import { HeaderText } from "@/assets/HeaderText";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error'
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message:
                    error.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="items-center justify-center overflow-hidden xl:p-20 p-10">
            <HeaderText text="Contact" />
            <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-gold/20 bg-stone/40 p-8 shadow-xl shadow-black/40 backdrop-blur-xl">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-4">
                        <p className="text-xl leading-relaxed text-parchment">
                            Send me a raven here.
                        </p>
                        <div className="space-y-2 text-md leading-relaxed text-parchment-dim">
                            <p>You can also reach me directly at <a href="mailto:arianatranumn@gmail.com" className="text-gold">arianatranumn@gmail.com</a>.</p>
                            <p>For a quick note, this form is ready for you to use.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="flex flex-col gap-2 text-md text-parchment-dim">
                                <span>Name</span>
                                <input
                                    name="from_name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="rounded-lg border border-parchment-dim/30 bg-stone-mid/70 px-3 py-2 text-parchment outline-none placeholder:text-parchment-dim/70 focus:border-gold"
                                />
                            </label>
                            <label className="flex flex-col gap-2 text-md text-parchment-dim">
                                <span>Email</span>
                                <input
                                    name="reply_to"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="rounded-lg border border-parchment-dim/30 bg-stone-mid/70 px-3 py-2 text-parchment outline-none placeholder:text-parchment-dim/70 focus:border-gold"
                                />
                            </label>
                        </div>

                        <label className="flex flex-col gap-2 text-md text-parchment-dim">
                            <span>Message</span>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                className="rounded-lg border border-parchment-dim/30 bg-stone-mid/70 px-3 py-2 text-parchment outline-none placeholder:text-parchment-dim/70 focus:border-gold"
                            />
                        </label>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button type="submit" size="sm" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send"}
                            </Button>
                            {submitStatus?.type === "success" && (
                                <p className="text-md text-gold">{submitStatus.message}</p>
                            )}
                            {submitStatus?.type === "error" && (
                                <p className="text-md text-ember">{submitStatus.message}</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};