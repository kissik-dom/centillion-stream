import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  channels: defineTable({
    name: v.string(),
    category: v.string(),
    description: v.string(),
    thumbnailUrl: v.optional(v.string()),
    viewerCount: v.number(),
    isLive: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_category", ["category"]),
  watchHistory: defineTable({
    userId: v.id("users"),
    channelId: v.id("channels"),
    watchedAt: v.number(),
  })
    .index("by_user", ["userId"]),
});

export default schema;
