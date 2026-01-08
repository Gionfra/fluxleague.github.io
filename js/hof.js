fetch("data/players.json")
    .then(res => res.json())
    .then(data => {

        const players = data.players;

        // Removes those with 0 wins or 0 podiums
        const filteredWins = players.filter(p => Number(p.wins) > 0);
        const filteredPodiums = players.filter(p => Number(p.podiums) > 0);

        // Order
        const sortedWins = [...filteredWins].sort((a, b) => b.wins - a.wins);
        const sortedPodiums = [...filteredPodiums].sort((a, b) => b.podiums - a.podiums);

        const winsList = document.getElementById("wins-list");
        const podiumsList = document.getElementById("podiums-list");

        // Most Wins
        sortedWins.forEach(p => {
            winsList.innerHTML += `
                <div class="player-card">
                    <span class="player-name">${p.name}</span>
                    <span class="player-stat">${p.wins} wins</span>
                    <a class="btn-view" href="players/${p.name}.html">View</a>
                </div>
            `;
        });

        // Most Podiums
        sortedPodiums.forEach(p => {
            podiumsList.innerHTML += `
                <div class="player-card">
                    <span class="player-name">${p.name}</span>
                    <span class="player-stat">${p.podiums} podiums</span>
                    <a class="btn-view" href="players/${p.name}.html">View</a>
                </div>
            `;
        });

    });
