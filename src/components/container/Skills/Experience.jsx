import styles from './Experience.module.css';
const Experience = () => {
    return (
        <>
            <section id={styles.experience}>
                <div className={styles.mainContainer}>
                    <div className={styles.container}>
                        <span className={styles.spa}><p className={styles.para}>Web Development</p></span>
                    </div>
                    <div className={styles.content}>
                    <li>learning development since 2021</li>
                        <li>Completed Development training.</li>
                        <li>Made several projects.</li>
                        <li>Providing fresh content.</li>
                        <li>Earned several certificates.</li>
                        
                    </div>
                </div>
                {/* second div */}

                <div className={styles.mainContainer}>
                    <div className={styles.container}>
                        <span className={styles.spa}><p className={styles.para}>Responsive Design</p></span>
                    </div>
                    <div className={styles.content}>
                        <li>knowledge of Design Principles</li>
                        <li>Knowledge of Color Contrast.</li>
                        <li>Proficiency in Design.</li>
                        <li>Having knowledge of UI UX.</li>
                        <li>Websites suitable for any devices.</li>
                    </div>
                </div>

         

             
            </section>







        </>

    )
}

export default Experience;