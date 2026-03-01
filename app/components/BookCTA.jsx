'use client';
import { useState } from 'react';

const stages = ['Bootstrapped', 'Pre-Seed', 'Seed', 'Series A', 'Series B+', 'Profitable / No VC'];
const categories = ['Founder / CEO', 'Investor / VC', 'Performance & Mindset', 'Finance & Wealth', 'Other'];

const initialForm = { name: '', email: '', company: '', role: '', linkedin: '', stage: '', category: '', story: '', reach: '' };

export default function BookCTA() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const set = (key, val) => {
        setForm(f => ({ ...f, [key]: val }));
        if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Required';
        if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email required';
        if (!form.company.trim()) e.company = 'Required';
        if (!form.role.trim()) e.role = 'Required';
        if (!form.stage) e.stage = 'Select a stage';
        if (!form.category) e.category = 'Select a category';
        if (!form.story.trim() || form.story.trim().length < 30) e.story = 'Please write at least 30 characters';
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSubmitting(true);
        setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1600);
    };

    const fieldClass = (key) =>
        `guest-input${focused === key ? ' guest-input--focused' : ''}${errors[key] ? ' guest-input--error' : ''}`;

    if (submitted) {
        return (
            <section className="book-section" id="book">
                <div className="container">
                    <div className="book-success">
                        <div className="book-success-icon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h2 className="book-success-title">Application Received!</h2>
                        <p className="book-success-desc">
                            Thanks, <strong>{form.name.split(' ')[0]}</strong>. We review every application personally. If your story fits, we'll reach out within <strong>5–7 business days</strong>.
                        </p>
                        <button className="btn-outline" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
                            Submit Another Application
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="book-section" id="book">
            <div className="container">
                <div className="book-form-wrapper">
                    {/* Left — copy */}
                    <div className="book-copy">
                        <div className="section-tag">BE OUR GUEST</div>
                        <h2 className="book-title">Got a Story<br />Worth 1M+ Ears?</h2>
                        <p className="book-desc">
                            We only have <span className="accent">12 guest slots</span> per quarter — and every seat goes to someone with a real story to tell. Apply below.
                        </p>
                        <div className="book-requirements">
                            <div className="req">✓ Founders at Series A+</div>
                            <div className="req">✓ Verified track record</div>
                            <div className="req">✓ Story worth 1M+ ears</div>
                        </div>
                        <div className="book-slots">
                            <div className="slot-label">SLOTS REMAINING THIS QUARTER</div>
                            <div className="slot-bar">
                                <div className="slot-fill" style={{ width: '25%' }}></div>
                            </div>
                            <div className="slot-count"><span className="accent">3</span> / 12 left</div>
                        </div>
                    </div>

                    {/* Right — form */}
                    <form className="book-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Full Name *</label>
                                <input
                                    className={fieldClass('name')}
                                    type="text"
                                    placeholder="Ritesh Bansal"
                                    value={form.name}
                                    onChange={e => set('name', e.target.value)}
                                    onFocus={() => setFocused('name')}
                                    onBlur={() => setFocused('')}
                                />
                                {errors.name && <span className="form-error">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email *</label>
                                <input
                                    className={fieldClass('email')}
                                    type="email"
                                    placeholder="you@company.com"
                                    value={form.email}
                                    onChange={e => set('email', e.target.value)}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                />
                                {errors.email && <span className="form-error">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Company / Venture *</label>
                                <input
                                    className={fieldClass('company')}
                                    type="text"
                                    placeholder="TechNova Inc."
                                    value={form.company}
                                    onChange={e => set('company', e.target.value)}
                                    onFocus={() => setFocused('company')}
                                    onBlur={() => setFocused('')}
                                />
                                {errors.company && <span className="form-error">{errors.company}</span>}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Your Role / Title *</label>
                                <input
                                    className={fieldClass('role')}
                                    type="text"
                                    placeholder="Founder & CEO"
                                    value={form.role}
                                    onChange={e => set('role', e.target.value)}
                                    onFocus={() => setFocused('role')}
                                    onBlur={() => setFocused('')}
                                />
                                {errors.role && <span className="form-error">{errors.role}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Stage *</label>
                                <div className="form-chip-group">
                                    {stages.map(s => (
                                        <button
                                            key={s}
                                            type="button"
                                            className={`form-chip${form.stage === s ? ' form-chip--active' : ''}`}
                                            onClick={() => set('stage', s)}
                                        >{s}</button>
                                    ))}
                                </div>
                                {errors.stage && <span className="form-error">{errors.stage}</span>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Category *</label>
                                <div className="form-chip-group">
                                    {categories.map(c => (
                                        <button
                                            key={c}
                                            type="button"
                                            className={`form-chip${form.category === c ? ' form-chip--active' : ''}`}
                                            onClick={() => set('category', c)}
                                        >{c}</button>
                                    ))}
                                </div>
                                {errors.category && <span className="form-error">{errors.category}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">LinkedIn or Website</label>
                            <input
                                className={fieldClass('linkedin')}
                                type="url"
                                placeholder="https://linkedin.com/in/yourname"
                                value={form.linkedin}
                                onChange={e => set('linkedin', e.target.value)}
                                onFocus={() => setFocused('linkedin')}
                                onBlur={() => setFocused('')}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Your Story — why should you be on the podcast? *
                                <span className="form-char-count">{form.story.length} / 500</span>
                            </label>
                            <textarea
                                className={`guest-input guest-textarea${focused === 'story' ? ' guest-input--focused' : ''}${errors.story ? ' guest-input--error' : ''}`}
                                placeholder="Tell us about your journey, the challenge you overcame, or the insight you'd bring to 1M+ listeners..."
                                maxLength={500}
                                rows={5}
                                value={form.story}
                                onChange={e => set('story', e.target.value)}
                                onFocus={() => setFocused('story')}
                                onBlur={() => setFocused('')}
                            />
                            {errors.story && <span className="form-error">{errors.story}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Estimated reach / audience size <span className="form-optional">(optional)</span></label>
                            <input
                                className={fieldClass('reach')}
                                type="text"
                                placeholder="e.g. 50K Instagram, 10K LinkedIn"
                                value={form.reach}
                                onChange={e => set('reach', e.target.value)}
                                onFocus={() => setFocused('reach')}
                                onBlur={() => setFocused('')}
                            />
                        </div>

                        <button type="submit" className="book-submit-btn" disabled={submitting}>
                            {submitting ? (
                                <span className="book-submit-loading">
                                    <span className="spinner"></span> Submitting…
                                </span>
                            ) : 'Apply to Be Our Guest →'}
                        </button>
                        <p className="form-fine-print">We review every application personally. No spam, ever.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
