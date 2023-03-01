import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import { BsDiscord, BsTwitter, BsInstagram, BsLink45Deg } from "react-icons/bs";
import ReactMarkdown from 'react-markdown'
import { useContext } from "react";
import { CollectionContext } from "context/CollectionContext"

export const CollectionView = () => {
  const { selected } = useContext(CollectionContext)!!

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
        alt={selected!!.symbol}
        height="140"
        sx={{ width: "auto", maxWidth: "30vw", borderRadius: "100px" }}
        image={selected!!.image_url}
      />
      <CardContent sx={{
        maxWidth: "60vw", alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {selected!!.name}
        </Typography>
        <Typography component="div" variant="body2" color="text.secondary" sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactMarkdown >{selected!!.description}</ReactMarkdown>

        </Typography>
        <div style={{ flexDirection: "row" }}>
          {
            selected!!.external_url &&
            <IconButton onClick={() => { window.open(selected!!.external_url, '_blank')!!.focus() }}>
              <BsLink45Deg />
            </IconButton>
          }
          {selected!!.discord_url &&
            <IconButton onClick={() => { window.open(selected!!.discord_url, '_blank')!!.focus() }}>
              <BsDiscord />
            </IconButton>
          }
          {
            selected!!.twitter_username &&
            <IconButton onClick={() => { window.open('https://twitter.com/' + selected!!.twitter_username, '_blank')!!.focus() }}>
              <BsTwitter />
            </IconButton>
          }
          {
            selected!!.instagram_username &&
            <IconButton onClick={() => { window.open('https://www.instagram.com/' + selected!!.discord_url, '_blank')!!.focus() }}>
              <BsInstagram />
            </IconButton>
          }
        </div>

        {/* TODO: clean + reuse code */}
      </CardContent>
    </Card>
  )
}
