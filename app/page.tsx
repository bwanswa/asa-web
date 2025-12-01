"use client";
import { View, Text, TouchableOpacity, ScrollView } from "react-native-web";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1c1c2e", padding: 20 }}>
      {/* Main Layout */}
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {/* LEFT COLUMN */}
        <View style={{ flex: 1, minWidth: 300 }}>
          {/* User Info */}
          <View
            style={{
              backgroundColor: "#2a2a3d",
              padding: 20,
              borderRadius: 12,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
              Jeff 🏆
            </Text>
            <Text style={{ fontSize: 16, color: "#aaa" }}>Score: 63.15</Text>
          </View>

          {/* Upcoming Games */}
          <View
            style={{
              backgroundColor: "#2a2a3d",
              padding: 20,
              borderRadius: 12,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff", marginBottom: 15 }}>
              Upcoming Games
            </Text>

            {[
              { teams: "West Ham vs Man City", date: "Sep 16" },
              { teams: "FC Utrecht vs AFC Ajax", date: "Sep 17" },
              { teams: "AS Monaco vs Lorient", date: "Sep 17" },
              { teams: "Toulouse vs Lens", date: "Sep 17" },
            ].map((match, index) => (
              <View
                key={index}
                style={{
                  paddingVertical: 12,
                  borderBottomWidth: index < 3 ? 1 : 0,
                  borderBottomColor: "#444",
                }}
              >
                <Text style={{ fontSize: 16, color: "#fff" }}>{match.teams}</Text>
                <Text style={{ fontSize: 14, color: "#888" }}>{match.date}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* RIGHT COLUMN */}
        <View style={{ flex: 2, minWidth: 300 }}>
          <View
            style={{
              backgroundColor: "#2a2a3d",
              padding: 20,
              borderRadius: 12,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff", marginBottom: 15 }}>
              Place Your Bets
            </Text>

            {[
              { match: "FC Cartagena vs Real Betis", odds: "2.15" },
              { match: "Real Betis vs FC Cartagena", odds: "2.15" },
              { match: "FC Cartagena vs Real Betis", odds: "2.15" },
              { match: "SC Freiburg vs FC Cartagena", odds: "2.15" },
            ].map((bet, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 12,
                  borderBottomWidth: index < 3 ? 1 : 0,
                  borderBottomColor: "#444",
                }}
              >
                <View>
                  <Text style={{ fontSize: 16, color: "#fff" }}>{bet.match}</Text>
                  <Text style={{ fontSize: 14, color: "#888" }}>Odds: {bet.odds}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#28a745",
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 6,
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "600" }}>Bet</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
          paddingVertical: 15,
          backgroundColor: "#2a2a3d",
          borderRadius: 12,
        }}
      >
        {["🏠", "🏆", "📅", "🪙"].map((icon, index) => (
          <Text key={index} style={{ fontSize: 24, color: "#fff" }}>
            {icon}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
