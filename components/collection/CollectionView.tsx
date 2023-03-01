import { Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import { Collection } from "../../model/collection"
import { BsDiscord, BsTwitter, BsInstagram, BsLink45Deg } from "react-icons/bs";
import ReactMarkdown from 'react-markdown'

export const CollectionView = (collection: Collection) => {
  return (
    
    <Card
      sx={{
        display: "flex", flexDirection: "column", alignItems: "center",
        width: "80vw", backgroundImage: "none", background: "none"
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        alt={collection.symbol}
        height="140"
        sx={{ width: "auto", maxWidth: "30vw", borderRadius: "100px" }}
        image={collection.image_url}
      />
      <CardContent sx={{
        maxWidth: "60vw", alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {collection.name}
        </Typography>
        <Typography component="div" variant="body2" color="text.secondary" sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactMarkdown >{collection.description}</ReactMarkdown>

        </Typography>
        <div style={{ flexDirection: "row" }}>
          {
            collection.external_url &&
            <IconButton onClick={() => { window.open(collection.external_url, '_blank')!!.focus() }}>
              <BsLink45Deg />
            </IconButton>
          }
          {collection.discord_url &&
            <IconButton onClick={() => { window.open(collection.discord_url, '_blank')!!.focus() }}>
              <BsDiscord />
            </IconButton>
          }
          {
            collection.twitter_username &&
            <IconButton onClick={() => { window.open('https://twitter.com/' + collection.twitter_username, '_blank')!!.focus() }}>
              <BsTwitter />
            </IconButton>
          }
          {
            collection.instagram_username &&
            <IconButton onClick={() => { window.open('https://www.instagram.com/' + collection.discord_url, '_blank')!!.focus() }}>
              <BsInstagram />
            </IconButton>
          }
        </div>

        {/* TODO: clean + reuse code */}
      </CardContent>
    </Card>
  )
}
