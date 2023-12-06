export default function RandomUpdates() {
        const randomUpdatesArray = [
            {
                name: "Charlie Williams",
                update: "Just saw a squirrel eating a slice of pizza. I need to up my snack game—clearly, the bar has been raised in the animal kingdom."
            },
            {
                name: "Emily Davis",
                update: "Tried to impress my cat by speaking French. He gave me the 'you're embarrassing yourself' look and walked away. I think I offended his sophisticated feline sensibilities."
            },
            {
                name: "Dave Miller",
                update: "Considering renaming my WiFi to 'FBI Surveillance Van #12' to add some excitement to the neighborhood. What do you think?"
            }
        ];

        return (
            <div>
                {randomUpdatesArray.map((update, index) => (
                    <div key={index}>
                        <h3>{update.name}</h3>
                        <p>{update.update}</p>
                    </div>
                ))}
            </div>
        );
    };
