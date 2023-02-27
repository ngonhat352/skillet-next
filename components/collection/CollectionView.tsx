import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Collection } from "../../model/collection"
// import { BsDiscord, BsTwitter, BsInstagram, BsLink45Deg } from "react-icons/bs";
// import ReactMarkdown from 'react-markdown'

export const CollectionView = (collection: Collection) => {
  return (
    <Card
      sx={{
        display: "flex", flexDirection: "column", alignItems: "center",
        position: "absolute", float: "left", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        alt={collection.symbol}
        height="140"
        sx={{ objectFit: "contain", maxWidth: "70vw" }}
        image={collection.banner_image_url ?? collection.image_url}
      />
      <CardContent sx={{
        maxWidth: "70vw", alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {collection.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* <ReactMarkdown>{collection.description}</ReactMarkdown> */}

        </Typography>
        <div style={{ flexDirection: "row" }}>
          {/* <BsLink45Deg />
          <BsDiscord />
          <BsTwitter />
          <BsInstagram /> */}
        </div>

        {/* TODO: add links + styling to the 4 icons above */}
      </CardContent>
    </Card>
  )
}
