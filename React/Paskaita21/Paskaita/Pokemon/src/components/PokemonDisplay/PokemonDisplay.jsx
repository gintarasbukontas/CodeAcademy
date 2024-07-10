import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./PokemonDisplay.module.css";

export default function PokemonDisplay({ pokemon }) {
  return (
    <Card sx={{ maxWidth: 275 }} className={styles.marginAuto}>
      {pokemon && (
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            {pokemon.name}
          </Typography>
          <Avatar
            className={styles.marginAuto}
            alt={`${pokemon.name} image`}
            src={pokemon.sprites.other["official-artwork"].front_default}
            sx={{ width: 150, height: 150 }}
          />
          <Typography
            className={styles.marginTop}
            sx={{ fontSize: 20 }}
            color="text.primary"
          >
            Type
          </Typography>
          <Typography color="text.secondary">
            {pokemon.types[0].type.name}
          </Typography>
          <div>
            <Typography
              className={styles.marginTop}
              sx={{ fontSize: 20 }}
              color="text.primary"
            >
              Abilities
            </Typography>
            {pokemon.abilities.map((ability, y) => (
              <Typography key={y} color="text.secondary">
                {ability.ability.name}
              </Typography>
            ))}
          </div>
          <div>
            <Typography
              className={styles.marginTop}
              sx={{ fontSize: 20 }}
              color="text.primary"
            >
              Base Stats
            </Typography>
            {pokemon.stats.map((stat, y) => (
              <Typography key={y} color="text.secondary">
                {stat.stat.name}: {stat.base_stat}
              </Typography>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
