interface LetterSectionProps {
  onNext: () => void;
}

function LetterSection({ onNext }: LetterSectionProps) {
  return (
    <div className="section letter-section">
      <div className="content-wrapper">
        <div className="letter-container reveal-text">
          <h2 className="letter-title">My Dear Mum,</h2>
          <div className="letter-content">
            <p>
              As I sit here on this blessed Christmas day, my heart overflows with gratitude and love for you.
              Words can never truly express the depth of what I feel, but I must try.
            </p>
            <p>
              From my earliest memories of childhood to this very moment as I journey through campus, you have
              been my constant, my strength, my everything. I remember the countless sleepless nights you endured,
              the worries you carried silently so I could sleep peacefully.
            </p>
            <p>
              Mum, I know the sacrifices you made. I see now how you worked tirelessly in your shop, day after day,
              sunrise to sunset, so that I could have my school fees paid. You never complained. You never made me
              feel the weight of what it cost you. You simply loved me through it all.
            </p>
            <p>
              There were times when things were difficult, when the road seemed impossible, but you never gave up on me.
              You made sure I stayed in school, from primary through secondary, and now here I am in campus. Every step
              of this journey has your fingerprints all over it.
            </p>
            <p>
              <strong>All that I am today is because of you.</strong> Every achievement, every dream, every bit of strength
              I possess flows from your unwavering love and dedication. You didn't just give me life, Mum; you gave me
              a future.
            </p>
            <p>
              I love you more deeply than these words can convey. You are my hero, my inspiration, and my blessing.
              Thank you for choosing me every single day. Thank you for being the most incredible mother anyone could
              ever ask for.
            </p>
            <p className="letter-signature">
              Forever grateful,<br />
              Your son
            </p>
          </div>
          <button className="elegant-button" onClick={onNext}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default LetterSection;
