import Header from "@/components/Header";
import Button from "@/components/Button";
import { labels } from "@/data/labels";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-petrol">
        <svg
          className={styles.face}
          viewBox="0 0 320 380"
          role="img"
          aria-label="404"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="25"
          >
            <g className={styles.face__eyes} transform="translate(0, 112.5)">
              <g transform="translate(15, 0)">
                <polyline
                  className={styles["face__eye-lid"]}
                  points="37,0 0,120 75,120"
                />
                <polyline
                  className={styles.face__pupil}
                  points="55,120 55,155"
                  strokeDasharray="35 35"
                />
              </g>
              <g transform="translate(230, 0)">
                <polyline
                  className={styles["face__eye-lid"]}
                  points="37,0 0,120 75,120"
                />
                <polyline
                  className={styles.face__pupil}
                  points="55,120 55,155"
                  strokeDasharray="35 35"
                />
              </g>
            </g>
            <rect
              className={styles.face__nose}
              rx="4"
              ry="4"
              x="132.5"
              y="112.5"
              width="55"
              height="155"
            />
            <g strokeDasharray="102 102" transform="translate(65, 334)">
              <path
                className={styles["face__mouth-left"]}
                d="M 0 30 C 0 30 40 0 95 0"
                strokeDashoffset="-102"
              />
              <path
                className={styles["face__mouth-right"]}
                d="M 95 0 C 150 0 190 30 190 30"
                strokeDashoffset="102"
              />
            </g>
          </g>
        </svg>

        <h1 className="text-2xl font-bold">{labels.notFoundTitle}</h1>
        <p className="text-center text-gray-600">{labels.notFoundText}</p>
        <Button label={labels.btnBackHome} href="/" />
      </section>
    </main>
  );
}
