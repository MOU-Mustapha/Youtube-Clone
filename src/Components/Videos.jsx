import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos?.map((item, index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard videoDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
