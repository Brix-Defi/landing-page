import { twMerge } from "tailwind-merge";
import { privacyPolicy } from "../../const";
import { layout, styles } from "../../style";

const PrivacyPolicy = () => {
  return (
    <section className={layout.section}>
      <div className="w-full relative">
        <div
          className={twMerge(
            "pt-10",
            "flex justify-center",
            "pb-3 sm:pb-6 md:pb-9"
          )}
        >
          <div>
            <h2 className={styles.heading2}>Privacy Policy</h2>
          </div>
        </div>

        <div>
          {privacyPolicy.map((policy) => (
            <div key={policy.title} className={twMerge("mt-5 sm:mt-10 md:mt-16")}>
              <h3 className={styles.heading3}>{policy.title}</h3>
              <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: policy.content }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
